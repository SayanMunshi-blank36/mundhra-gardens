import discussionStyles from "../styles/Discussion.module.css";

const Discussion = () => {
  return (
    <section className={discussionStyles.main_discussion}>
      <h1>Reviews (Coming Soon)</h1>
      <div className={discussionStyles.discussion_modal}>
        <p>Reviews Comming Soon !!</p>
      </div>
    </section>
  );
};

export default Discussion;
