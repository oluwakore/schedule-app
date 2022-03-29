import newsletter from "../styles/newsletter.module.scss";

const Newsletter = () => {


  return (
    <div className={newsletter.container}>
      <div className={newsletter.subcontainer}  >
        <h1> Sign up for our newsletter </h1>
        <div>
        <div className={newsletter.emailpart} >
          <div className={newsletter.emailbox} > <input type="text" placeholder="Email address" /> </div>          
          <button  className={newsletter.subs} >Subscribe</button>
         </div>
      </div>
      </div>
    </div>
  );
};

export default Newsletter;
