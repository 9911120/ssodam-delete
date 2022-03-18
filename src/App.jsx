/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { useState } from "react";

const main = css`
    text-align: center;
    font-size: 14px;
    padding: 100px 30px;
    max-width: 500px;
    margin: auto;
`;
const logo = css`
    display: inline-block;
    font-size: 18px;
    color: #fff;
`;
const logo_red = css`
    display: inline-block;
    background: #e66060;
    padding: 10px 15px;
    border-radius: 10px 0 0 10px;
`;
const logo_gray = css`
    display: inline-block;
    background: #333;
    padding: 10px 15px;
    border-radius: 0 10px 10px 0;
`;
const desc = css`
    margin-top: 30px;
    line-height: 160%;
`;
const desc_black = css`
    color: #333;
`;
const desc_gray = css`
    max-width:300px;
    margin:auto;
    margin-top: 20px;
    color: #aaa;
`;
const example = css`
    display: inline-block;
    padding: 20px;
    background: #f9f9f9;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-top: 20px;
`;
const form_wrapper = css`
    margin-top: 30px;
`;
const textarea = css`
    font-size: 14px;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    line-height: 160%;
    width: 300px;
    height: 200px;
    &::placeholder {
        color: #aaa;
    }
    &:focus {
        outline: 1px solid #e66060 !important;
        box-shadow: rgb(230 96 96 / 40%) 0px 0px 0px 3px;
        transition: all 0.2s ease-in-out 0s;
    }
`;
const submit = css`
    border-radius: 10px;
    background: #ccc;
    color: #333;
    font-size: 14px;
    font-weight:bold;
    padding: 10px 15px;
    margin-top: 10px;
`;
const footer = css`
    margin-top:30px;
    font-size:12px;
    color:#aaa;
    line-height:160%;
`;

function App() {

    const [value,setValue] = useState("");
    const onType =(e)=>{
        setValue(e.target.value.replace(/[^\d,]+/g, ''));
    }
    const submitHandler =(e)=>{
        e.preventDefault();
        if (value=="") {
            alert("삭제할 글이 없어요");
            return false;
        } else {
            if (window.confirm("삭제하려는 글 개수만큼 서담 사이트가 새로 열려요. 3초 후에 자동으로 꺼지니 조금만 기다려주세요 ㅎㅎ")) {
                let new_popup = [];
                for (let i = 0; i < value.split(",").length; i++) {
                    new_popup.push(window.open('http://ssodam.com/delete/'+value.split(",")[i], '_blank'));
                }
                setTimeout(()=>{
                    for (let i = 0; i < new_popup.length; i++) {
                        new_popup[i].close();
                    }
                },3000);
            } else {
                return false;
            }
        }
    }

    return (
        <main css={main}>
            <a href="/" css={logo}>
                <div css={logo_red}>서담</div>
                <div css={logo_gray}>내가 쓴 글 한번에 삭제하기</div>
            </a>
            <div css={desc}>
                <div css={desc_black}>
                    아래 입력창에 삭제하고자 하는 서담 글들의 번호를 쉼표(,)로
                    구분하여 적어주세요. 로그인 상태여야 하며 본인이 작성한 글이
                    아닌 경우에는 오류가 발생합니다.
                </div>
                <div css={example}>
                    <span css={{ color: "#aaa" }}>예시)</span> 1319771,1203829,1173201,1124170,1112391
                </div>
            </div>
            <div css={form_wrapper}>
                <form onSubmit={submitHandler}>
                    <textarea
                        css={textarea}
                        placeholder="삭제하고자 하는 글들의 번호를 쉼표(,)로 구분하여 적어주세요"
                        name=""
                        id=""
                        value={value}
                        onChange={onType}
                    />
                    <br />
                    <button css={submit}>삭제하기</button>
                </form>
            </div>
            <footer css={footer}>
                경영 18 김모군 만듦
                <div css={desc_gray}>
                    본 웹사이트에서 제공하는 기능은 서담(http://ssodam.com)에서 정식으로 제공하는 기능이 아니며, 이는 서담의 제작/운영진과 일체 관련이 없음을 알려 드립니다.
                </div>
            </footer>
        </main>
    );
}

export default App;
