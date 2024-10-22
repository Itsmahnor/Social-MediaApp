import { useContext,createContext, useRef } from "react";
import { AppStore } from "./Store/context";


export const Form = () => {
  const{HandleSubmit}=useContext(AppStore);

  const IdRef=useRef();
  const PostTitleRef=useRef();
  const PostContentRef=useRef();
  const ReactionRef=useRef();
  const Hashtag=useRef();


const HandleSubmitValue = (event) => {
  event.preventDefault();


  if (
    IdRef.current.value !== '' &&
    PostTitleRef.current.value !== '' &&
    PostContentRef.current.value !== '' &&
    ReactionRef.current.value !== '' &&
    Hashtag.current.value !== ''
  ) {
    HandleSubmit(
      IdRef.current.value,
      PostTitleRef.current.value,
      PostContentRef.current.value,
      ReactionRef.current.value,
      Hashtag.current.value
    );

    IdRef.current.value = '';
    PostTitleRef.current.value = '';
    PostContentRef.current.value = '';
    ReactionRef.current.value = '';
    Hashtag.current.value = '';
  }
};


  return (
    <>
     <form
  className="md:w-[40vw] w-[80vw] h-auto mt-5 md:ml-5 p-4 shadow-md rounded-md bg-white"
  onSubmit={HandleSubmitValue}
>
        <div className="mb-4">
          <label htmlFor="userId" className="form-label font-semibold">
            Enter your User Id here
          </label>
          <input
            type="text"
            className="form-control p-2 border border-gray-300 rounded"
            id="userId"
            placeholder="Your User Id"
            ref={IdRef}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="form-label font-semibold">
            Post Title
          </label>
          <input
            type="text"
            className="form-control p-2 border border-gray-300 rounded"
            id="title"
            placeholder="How are you feeling today..."
            ref={PostTitleRef}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="body" className="form-label font-semibold">
            Post Content
          </label>
          <textarea
            type="text"
            rows="4"
            className="form-control p-2 border border-gray-300 rounded"
            id="body"
            placeholder="Tell us more about it"
            ref={PostContentRef}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="reactions" className="form-label font-semibold">
            Number of reactions
          </label>
          <input
            type="text"
            className="form-control p-2 border border-gray-300 rounded"
            id="reactions"
            placeholder="How many people reacted to this post"
            ref={ReactionRef}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tags" className="form-label font-semibold">
            Enter your hashtags here
          </label>
          <input
            type="text"
            className="form-control p-2 border border-gray-300 rounded"
            id="tags"
            placeholder="Please enter tags using space"
            ref={Hashtag}
          />
        </div>

        <button type="submit" className="btn bg-black text-white text-[1.5rem] w-full p-2 font-semibold">
          Post
        </button>
      </form>
    </>
  );
};
