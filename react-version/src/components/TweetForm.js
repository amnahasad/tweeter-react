import React from 'react'; //optional

function TweetForm() {

  const humming = "What are you humming about?";

  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onSubmit={(e)=>e.preventDefault()}>
        <textarea className="form__textarea" name="text" placeholder={humming}></textarea>
        <input type="submit" value="Tweet" className="form__input" onClick={(e)=>e.preventDefault()}/>
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;