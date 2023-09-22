import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Magic = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [userHistory, setUserHistory] = useState([]);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setUserHistory(articlesFromLocalStorage);
    }
  }, []);

  // api call handler
  const handleSubmit = async (e) => {
    console.log(article.url);
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const userArticleHistory = [newArticle, ...userHistory];

      setArticle(newArticle);
      setUserHistory(userArticleHistory);
      localStorage.setItem("articles", JSON.stringify(userArticleHistory));
      console.log(newArticle);
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}>
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          {/* Input */}
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700">
            Go
          </button>
        </form>

        {/* User History */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {userHistory.map((article, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(article)}
              className="link_card">
              <div className="copy_btn">
                <img
                  src={copy}
                  alt="copy_icon"
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <div>
                <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                  {article.url}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Summary */}
    </section>
  );
};

export default Magic;
