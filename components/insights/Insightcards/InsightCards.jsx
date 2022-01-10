import { Circle, H1, H3, InsightCardContainer,
         Middle, MiddleLeft, Number, NumberP, Progress, SmallText, Svg } from "./Style"
import { SiGoogleanalytics } from 'react-icons/si';
import { ImStatsBars2 } from 'react-icons/im';
import { BiStats } from 'react-icons/bi';


const InsightCards = ({ Key, Title, Value, Percentage, Icon }) => {
        const Type = Title.split(/(\s+)/)
    return (
        <InsightCardContainer className={Type[2]}>
            { Icon === "SiGoogleanalytics" && <SiGoogleanalytics name="1" />}
            { Icon === "ImStatsBars2" && <ImStatsBars2 name="1"/>}
            { Icon === "BiStats" && <BiStats name="2"/>}
            <Middle>
                <MiddleLeft>
                    <H3>{Title}</H3>
                    <H1>${Value}</H1>
                </MiddleLeft>
                <Progress>
                    <Svg>
                        <Circle className={Type[2]} cx="38" cy="38" r="36" ></Circle>
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
