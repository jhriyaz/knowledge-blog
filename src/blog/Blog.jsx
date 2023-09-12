import PropTypes from "prop-types";
import bookmarkBtn from "/bookmark.svg";

const Blog = ({ blogPost, handleTimeAndBookmark, isRead }) => {
  let { author, cover_pic, posted_date, reading_time, hashtags, title } =
    blogPost;
  let date = new Date(posted_date);
  let dateString = date.toDateString();
  return (
    <div className="pb-9">
      <img
        className="w-full lg:h-[450px] rounded-lg"
        src={cover_pic}
        alt="Cover Photo"
      />
      <div className="pt-9 flex justify-between gap-2">
        <div className="flex gap-4">
          <img className="w-[50px] rounded-full" src={author.image} alt="" />
          <div>
            <h2 className="text-black lg:text-2xl text-xl font-bold">
              {author.name}
            </h2>
            <p>{dateString}</p>
          </div>
        </div>

        <div className="flex gap-4 items-center text-[#022558f3]">
          <p>{reading_time}</p>
          <button onClick={() => handleTimeAndBookmark(title)}>
            <img className="" src={bookmarkBtn} alt="bookmark button" />
          </button>
        </div>
      </div>
      <h1 className=" font-bold lg:text-4xl text-2xl text-black pt-4">
        {" "}
        {title}
      </h1>
      <div className="flex gap-3 py-4">
        {hashtags.map((hash, index) => (
          <p key={index}>#{hash}</p>
        ))}
      </div>
      <button
        key={blogPost.id}
        onClick={() => handleTimeAndBookmark(reading_time, blogPost.id - 1)}
        className={`underline font-semibold mb-10 btn  ${
          isRead ? "text-[green] btn-disabled" : "text-[#6047EC]"
        }`}
      >
        {!isRead ? " Mark as read" : "reading completed"}
      </button>
      <hr />
    </div>
  );
};
Blog.propTypes = PropTypes.object.isRequired;
export default Blog;
