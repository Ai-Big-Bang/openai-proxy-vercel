import React, {memo} from "react";

const Page = memo(({...props}) => {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingTop: "20px",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            color: "rgb(145, 109, 213)",
          }}
        >
          Success Run OpenAI Proxy！！！
        </h2>
        <div style={{marginTop: "20px"}}>
          本项目由「AI应用大爆炸」社群贡献。
        </div>
        <h4
          style={{
            marginTop: "40px",
            minWidth: "100px",
            color: "rgb(145, 109, 213)",
          }}
        >
          「进入AI应用大爆炸社群」：
        </h4>
        <div style={{marginTop: "20px"}}>
          1、组队打造AI自媒体矩阵，一起赚钱。
        </div>
        <div style={{margin: "20px 0"}}>2、组队开发AI应用，一起赚钱。</div>
        <div style={{margin: "10px 0"}}>扫描下方公众号，回复「进群」即可</div>
        <img
          style={{marginBottom: "20px", marginTop: "5px"}}
          width="50%"
          src="/chat-group.png"
        />
      </div>
    </div>
  );
});

export default Page;
