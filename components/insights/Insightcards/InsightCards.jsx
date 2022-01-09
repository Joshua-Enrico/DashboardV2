import { Circle, H1, H3, InsightCardContainer,
         Middle, MiddleLeft, Number, NumberP, Progress, SmallText, Svg } from "./Style"
import { SiGoogleanalytics } from 'react-icons/si';


const InsightCards = ({ Key, Title, Value, Percentage }) => {
    return (
        <InsightCardContainer>
            <SiGoogleanalytics />
            <Middle>
                <MiddleLeft>
                    <H3>{Title}</H3>
                    <H1>${Value}</H1>
                </MiddleLeft>
                <Progress>
                    <Svg>
                        <Circle cx="38" cy="38" r="36" ></Circle>
                    </Svg>
                    <Number>
                        <NumberP>{Percentage}</NumberP>
                    </Number>
                </Progress>
            </Middle>
            <SmallText >Last 24 Hours</SmallText>
        </InsightCardContainer>
    )
}

export default InsightCards
