"use client";
import Image from "next/image";
import style from ".//AskQuestion.module.css";
import SPD_PlusIcon from "../../assets/images/SPD_PlusIcon.png";
import SPD_MinusIcon from "../../assets/images/SPD_MinusIcon.png";
import { useState } from "react";



export default function AskQuestion({AQ_heading,AQ_Para, data1,data2}) {
  const [listData1, setListData1] = useState(data1);
  const [listData2, setListData2] = useState(data2);

  const taskPress1 = (id, isOpen) => {
    const updateArray1 = listData1?.map((item) => {
      if (item?.id == id) {
        return { ...item, isOpen: isOpen };
      } else {
        return { ...item, isOpen: false };
      }
    });
    setListData1(updateArray1);
  };
  const taskPress2 = (id, isOpen) => {
    const updateArray2 = listData2?.map((item) => {
      if (item?.id == id) {
        return { ...item, isOpen: isOpen };
      } else {
        return { ...item, isOpen: false };
      }
    });
    setListData2(updateArray2);
  };

  return (
    <div style={{padding:"5vw"}}>
      <div className={style.mainDiv}>
        <div className={style.Heading}>
        {AQ_heading}

        </div>
        <div className={style.ParaDiv}>
        {AQ_Para}

        </div>
      </div>

<div className={style.main} >
        

      <div className={style.subMainDiv}>
        {listData1?.map((item) => (
          <>
            <div className={style.container} key={item?.id}>
              <div className={style.subDiv}>{item?.heading}</div>
              <button
                className={style.btn}
                onClick={() => taskPress1(item?.id, !item?.isOpen)}
              >
                {item?.isOpen === true ? (
                  <Image
                    className={style.btn_img}
                    src={SPD_MinusIcon}
                    alt="SPD_PlusIcon"
                  />
                ) : (
                  <Image
                    className={style.btn_img}
                    src={SPD_PlusIcon}
                    alt="SPD_PlusIcon"
                  />
                )}
              </button>
            </div>
            {item?.isOpen && <div className={style.SubPara}>{item?.para}</div>}
          </>
        ))}
      </div>
      <div className={style.subMainDiv}>
        {listData2?.map((item) => (
          <>
            <div className={style.container} key={item?.id}>
              <div className={style.subDiv}>{item?.heading}</div>
              <button
                className={style.btn}
                onClick={() => taskPress2(item?.id, !item?.isOpen)}
              >
                {item?.isOpen === true ? (
                  <Image
                    className={style.btn_img}
                    src={SPD_MinusIcon}
                    alt="SPD_PlusIcon"
                  />
                ) : (
                  <Image
                    className={style.btn_img}
                    src={SPD_PlusIcon}
                    alt="SPD_PlusIcon"
                  />
                )}
              </button>
            </div>
            {item?.isOpen && <div className={style.SubPara}>{item?.para}</div>}
          </>
        ))}
      </div>
      </div>
    </div>
  );
}
