import React from 'react';
import tw from 'tailwind-styled-components';

//ui 작업중...
const PlantInfo = () => {
  return (
    <div>
      <p className="mb-4 leading-relaxed">
        풍성하고 아름다운 잎 때문에 빅토리아 시대부터 실내에 도입되어 사랑을
        받아왔으며, 오늘날에도 여전히 인기가 높은 실내식물이다.
      </p>

      <InfoDiv>
        <i className="text-blue-500 fas fa-water"> 물</i>
        <span className="ml-auto">주 2~3회</span>
      </InfoDiv>
      <InfoDiv>
        <i className="text-orange-500 fas fa-sun"> 햇빛</i>
        <span className="ml-auto">반음지</span>
      </InfoDiv>
      <InfoDiv className="mb-6 border-b">
        <i className="text-green-500 fas fa-temperature-low"> 온도</i>
        <span className="ml-auto">잘 자라는 온도 : 16~20℃</span>
      </InfoDiv>

      <button className="buy-button">구매하러 가기</button>
    </div>
  );
};

export default PlantInfo;

const InfoDiv = tw.div`
  plant-info-div
`;