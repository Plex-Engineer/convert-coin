import styled from "styled-components";
import backBtn from "../../assets/back-btn.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 80vh;
  width: 50vh;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    h1 {
      font-weight: 300;
      font-size: 26px;
      line-height: 130%;
      text-align: center;
      letter-spacing: -0.1em;
      color: #efefef;
    }
    img {
      width: 28px;
      &:hover {
        cursor: pointer;
      }
    }
  }

  input[type="search"] {
    background-color: #191919;
    color: white;
    font-size: 18px;
    padding: 1rem;
    border: 2px solid #191919;
    appearance: none;
    -webkit-appearance: none;
    &:focus {
      border: 2px solid var(--primary-color);
      outline: none;
    }
  }
  .token-list {
    overflow-y: scroll;
    scrollbar-color: var(--primary-color);
    scroll-behavior: smooth;
    /* width */
    &::-webkit-scrollbar {
      width: 6px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #151515;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      box-shadow: inset 2 2 5px var(--primary-color);

      background: var(--primary-color);
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #07e48c;
    }
  }
  .token-item {
    display: flex;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: -0.02em;
    /* text-transform: lowercase; */
    color: var(--off-white-color);
    padding: 2rem 0;
    border: 1px solid black;

    img {
      margin: 0 1rem;
      width: 28px;
      height: 28px;
    }

    &:hover {
      background-color: #001a0e;
      border: 1px solid var(--primary-color);
    }
  }
`;

interface Props {
  onClose: (value?: any) => void;
  tokens: any[];
  wrapped: boolean;
}

const DropDownModal = (props: Props) => {
  return (
    <Container>
      <header>
        <img
          onClick={() => {
            props.onClose({
              icon: "https://s2.coinmarketcap.com/static/img/coins/32x32/8.png",
              name: "select token",
              address: "0x0412C7c846bb6b7DC462CF6B453f76D8440b2609",
            });
          }}
          src={backBtn}
        />
        <h1>select</h1>
        <span
          style={{
            width: "28px",
          }}
        ></span>
      </header>
      {/* <input
        type="search"
        name="search"
        id="tokenSearch"
        autoComplete="new-off"
        placeholder="type name or paste address..."
      /> */}
      <div className="token-list">
        {props.tokens.map((token) =>
          token.icon ? (
            <div
              key={token.icon}
              className="token-item"
              onClick={() => {
                props.onClose(token);
              }}
            >
              <img src={token.icon} alt="" />
              <p>{props.wrapped ? token.wName : token.name}</p>
            </div>
          ) : null
        )}
      </div>
    </Container>
  );
};

export default DropDownModal;
