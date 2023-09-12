import PropTypes from "prop-types";
const SideBar = ({ bookmark, time }) => {
  return (
    <div className="width-full flex flex-col gap-9  lg:sticky top-10">
      <div className=" text-xl font-bold border-2 border-solid border-[#6047EC] px-4 py-6 bg-[#6047ec48] rounded-lg text-center">
        <h1 className="text-[#6047EC]">Spent time on read : {time} min</h1>
      </div>
      <div className=" px-4 bg-[#96969648] rounded-lg text-black text-xl font-bold">
        <h2 className="py-4">Bookmarked Blogs : {bookmark.length}</h2>
        {bookmark.map((tittle, index) => (
          <h2
            className=" p-5 bg-white text-black rounded-lg font-semibold text-lg mb-4"
            key={index}
          >
            {" "}
            {tittle}
          </h2>
        ))}
      </div>
    </div>
  );
};
SideBar.propTypes = PropTypes.object.isRequired;
export default SideBar;
