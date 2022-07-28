import styled from "styled-components";
const Container = styled.div`
  background-color: #040404;
  height: 40rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  /* padding: 1rem; */
  .title {
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 130%;
    text-align: center;
    letter-spacing: -0.1em;
    text-transform: lowercase;
    color: var(--primary-color);
    margin-bottom: 2rem;
    /* margin-top: 0.3rem; */
    width: 100%;
    background-color: #06fc991a;
    padding: 1rem;
    border-bottom: 1px solid var(--primary-color);
  }

  .dual-h-row {
    font-size : 18px;
    width: 26rem;
    display: flex;
    justify-content: space-between;
  }
  .balances {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: end;
    width: 18rem;
  }
  .bal {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
  .type {
    color: #8b8b8b;
  }
  .value {
    color: var(--primary-color);
  }
  .line {
    border-bottom: 1px solid #222;
  }
  .logo {
    /* padding: 1rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--primary-color);
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin-bottom: 1.2rem;
  }

  
  h2 {
    color: #777;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: left;
    line-height: 120%;
    margin-bottom: 0.4rem;
  }
  .secondaryBalance {
    font-weight: 300;
    font-size: 16px;
    line-height: 120%;
    color: #cdcdcd;
  }

  .btn-grp {
    display: flex;

  }

  .desc {
    margin: 0 2rem;
    margin-bottom: 2rem;
  }
  .textField{
    margin: .1rem 0;
    padding: 0.4rem 0;
    width: 26rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color : white;
    font-size: 18px;
    border-bottom: 1px solid var(--primary-color);

  }

  input[type="text"] {
    background-color: black;
    width: 100%;
    border: none;
    font-size: 18px;
    font-weight: 600;
    color: white; 
    margin: 0 2rem;
    &:focus {
      outline: none;
    }
  }
  footer {
    margin: 0 2rem;
    p {
    font-size : 14px;
    }
  }
`;

const Button = styled.button`
  font-weight: 400;
  width: 10rem;
  font-size: 18px;
  color: black;
  background-color: var(--primary-color);
  padding: 0.6rem;
  border: 1px solid var(--primary-color);
  margin: 2rem;
  /* margin: 3rem auto; */

  &:hover {
    background-color: #028a39;
    color: black;
    cursor: pointer;
  }
`;

const DeButton = styled.button`
  font-weight: 400;
  width: 10rem;
  font-size: 18px;
  color: var(--primary-color);
  background-color: black;
  padding: 0.6rem;
  border: 1px solid var(--primary-color);
  margin: 2rem;
  /* margin: 3rem auto; */

  &:hover {
    background-color: var(--primary-color-dark);
    color: black;
    cursor: pointer;
  }
`;
const StakeModal = () => {
  return (
    <Container>
      <div className="title">test.com</div>
     <div className="desc">
     <h2>Description</h2>
      <p style={{
        color : "white"
      }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At aut accusamus expedita dolore aspernatur. Minima soluta vitae perferendis ut, sunt qui eaque libero commodi ad, laborum sapiente, quasi voluptate similique!</p>
     </div>
      <div className="dual-h-row">
        <p className="type">delegation</p>
        <p className="value"> 34 canto</p>
      </div>
      <div className="dual-h-row">
        <p className="type">available balance</p>
        <p className="value"> 45 canto</p>
      </div>
      <div className="dual-h-row">
        <p className="type">commision</p>
        <p className="value"> 0.23 %</p>
      </div>

<div className="textField">
    <p>amount:</p>
<input type="text" name="amoubt" id="amount" />
<p>canto</p>
{/* <p>max</p> */}


    </div>    <div className="btn-grp">
    <DeButton>Undelegate</DeButton>
    <Button>Delegate</Button>
    </div>
      <footer>
        <p style={{
            color : "#EF4444"
        }}>staking will lock up your funds for 14 days</p>
        <p style={{
            color : "#8b8b8b"
        }}>
          Once you undelegate your stacked canto, you will need to wait 14 days
          for your tokens to be liquid
        </p>
      </footer>
    </Container>
  );
};

export default StakeModal;
