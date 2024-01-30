import Topheadings from "../../TopHeadings/TopHeadings";
import style from "./GetinTouch.module.css";


const title = "Get In Touch";
const heading = "Let’s get to work";
const paragraph =
  "Start a conversation around new product ideas, business opportunities, or tech consulting.";
const inputs = [
  { id: "1", placeholder: "First Name", type: "text" },
  { id: "2", placeholder: "Last Name", type: "text" },
  { id: "3", placeholder: "Email", type: "email" },
  { id: "4", placeholder: "Phone", type: "number" },
];

export default function GetInTouch() {
  return (
    <div className={style.mainContainer}>
      <div className={style.mainDiv}>
        <Topheadings
          title={title}
          heading={heading}
          paragraph={paragraph}
          customStyle
          abcClass
          width = {"30vw"}
        />
      </div>

      <div className={style.inputDiv}>
        {inputs?.map((inp) => {
          return (
            <input
              type={inp?.type}
              placeholder={inp?.placeholder}
              className={style.inputTxt}
              key={inp?.id}
            />
          );
        })}
        {/* <div>
        <input type="text" placeholder="Last Name" className={style.inputTxt} />
      </div>
      <div>
        <input type="email" placeholder="Email" className={style.inputTxt} />
      </div> */}
        <div>
          <textarea
            placeholder="Write down your message"
            className={style.textarea}
          ></textarea>
        </div>
        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
          }} className={style.chckB}
        >
          <input type="checkbox" className={style.checkbox}/>
          <p className={style.parag}>I want to receive a monthly tech newsletter</p>
        </div>
        <div>
          <button className={style.btn}>Submit Message</button>
        </div>
      </div>
    </div>
  );
}
