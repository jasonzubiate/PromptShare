"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import Footer from "./Footer";

function PromptCardList({ data, handleTagClick }) {
  return (
    <div className="mt-4 prompt_layout lg:mt-16">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
}

function Feed() {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setPosts(data);
  };

  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i"); // 'i' flag for case-insensitive search
    return posts.filter(
      (post) =>
        regex.test(post.creator.username) ||
        regex.test(post.prompt) ||
        regex.test(post.tag)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(() => {
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500);
    });
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult)
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <section className="feed">
        <form className="relative w-full flex-center">
          <input
            type="text"
            placeholder="Search for a tag or a username"
            value={searchText}
            onChange={handleSearchChange}
            required
            className="search_input peer"
          />
        </form>
        {searchText ? (
          <PromptCardList
            data={searchedResults}
            handleTagClick={handleTagClick}
          />
        ) : (
          <PromptCardList data={posts} handleTagClick={handleTagClick} />
        )}
      </section>
      <Footer />
    </>
  );
}

export default Feed;
