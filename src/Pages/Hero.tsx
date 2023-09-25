import React from "react";
import { styled } from "styled-components";
import img2 from "../assets/PHOTO-2023-09-22-12-57-36-removebg-preview.png";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Text>
            <h1>
              Supercharge Your Mobile Life with <span>HashIT!</span>
            </h1>
          </Text>
          <Img src={img2} />
          <SmallT>
            <p>
              Level up your mobile experience with Hashit! Send money, buy
              airtime, pay utilities, save, earn, learn, connect with friends,
              explore our vibrant marketplace, advertise your biz, and win
              exciting giveaways - all in one place.
            </p>
          </SmallT>
        </Wrapper>
        <DownWrap>
          <TextHolder>
            <h2>
              Join the waitlist for <span>HashIT!</span>
            </h2>
          </TextHolder>
          <Border1>
            <Box1>
              <input type="text" placeholder="Full name" />
            </Box1>
            <Box2>
              <input type="text" placeholder="Email address" />
            </Box2>

            <Box3>
              <h3>Get notified when HashIT is live</h3>
            </Box3>
          </Border1>
        </DownWrap>
      </Container>
    </div>
  );
};

export default Hero;

const Border1 = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  padding: 60px 0px;
`;

const Box3 = styled.div`
  height: 55px;
  width: 30%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  cursor: pointer;
  h3 {
    color: #fff;
  }
`;

const Box1 = styled.div`
  margin-bottom: 30px;
  height: 50px;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    padding: 18px 20px;
    display: flex;
    flex: 1;
    border: 1px solid black;
    border-radius: 7px;
  }
`;

const Box2 = styled.div`
  margin-bottom: 30px;
  border-radius: 10px;
  height: 50px;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    padding: 18px 20px;
    display: flex;
    flex: 1;
    border: 1px solid black;
    border-radius: 7px;
  }
`;

const TextHolder = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  margin-top: 70px;
  h2 {
    font-size: 50px;
  }
  span {
    color: #ec5a24;
  }
`;

const DownWrap = styled.div`
  width: 100%;
  height: 500px;
  background-color: #ffffff;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
`;

const SmallT = styled.div`
  width: 55%;

  p {
    font-weight: 500;
  }
`;

const Text = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: start;
  justify-content: center;
  h1 {
    font-size: 50px;
  }
  span {
    color: #ec5a24;
  }
`;

const Container = styled.div``;

const Wrapper = styled.div`
  width: 100%;
  height: 680px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  padding: 50px 0;
`;

const Img = styled.img`
  width: 80%;
  height: 390px;
  padding-bottom: 35px;
`;
