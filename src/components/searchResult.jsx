import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

export default function SearchResult({ username }) {
  const [user, setUser] = useState({});
  async function fetchUser() {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
      console.error("Could not fetch data");
      return;
    }

    const data = await res.json();
    setUser(data);
  }

  useEffect(() => {
    fetchUser();
  }, [username]);

  return (
    <div
      className="result-container"
    >
      {Object.keys(user).length > 0 ? (
        <div className="row">
          <div className="img-container">
            <img src={user?.avatar_url} alt="" />
          </div>
          <div className="col">
            <div className="user-info">
              <div className="username-container">
                <h3>
                  {user?.name ? (
                    user.name
                  ) : (
                    <p className="not-available">This profile has no name</p>
                  )}
                </h3>
                <a href={user?.html_url}>@{user?.login}</a>
                <p className="bio">
                  {user?.bio ? (
                    user.bio
                  ) : (
                    <p className="not-available">This profile has no bio</p>
                  )}
                </p>
              </div>
              <div className="join-date">
                <p>Joined {user?.created_at.slice(0, 10)}</p>
              </div>
            </div>
            <div className="other-infos">
              <div className="repos-info">
                <div className="repos">
                  <p>Repos</p>
                  <span>{user?.public_repos}</span>
                </div>
                <div className="followers">
                  <p>Followers</p>
                  <span>{user?.followers}</span>
                </div>
                <div className="following">
                  <p>Following</p>
                  <span>{user?.following}</span>
                </div>
              </div>

              <div className="location-links">
                <div className="links-container">
                  <div className="links">
                    {user?.location ? (
                      <p>
                        <FaLocationDot />
                        {user.location}
                      </p>
                    ) : (
                      <span className="not-available">
                        <FaLocationDot />
                        <p>Not Available</p>
                      </span>
                    )}
                  </div>
                </div>
                <div className="links-container">
                  <div className="links">
                    {user?.twitter_username ? (
                      <p>
                        <FaTwitter />
                        {user.twitter_username}
                      </p>
                    ) : (
                      <span className="not-available">
                        <FaTwitter />
                        <p>Not Available</p>
                      </span>
                    )}
                  </div>
                </div>
                <div className="links-container">
                  <div className="links">
                    {user?.blog ? (
                      <p>
                        <FaLink />
                        {user.blog}
                      </p>
                    ) : (
                      <span className="not-available">
                        <FaLink /> <p>Not Available</p>
                      </span>
                    )}
                  </div>
                </div>
                <div className="links-container">
                  <div className="links">
                    {user?.company ? (
                      <p>
                        <FaBuilding />
                        {user.company}
                      </p>
                    ) : (
                      <span className="not-available">
                        <FaBuilding /> <p>Not Available</p>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p style={{ color: "white" }}>No user found</p>
      )}
    </div>
  );
}
