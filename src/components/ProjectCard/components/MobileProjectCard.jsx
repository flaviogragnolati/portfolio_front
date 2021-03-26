import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Icons from './Icons';
import TechStack from './TechStack';
import StatusChip from './StatusChip';
import ImgContainer from './ImgContainer';

const Card = styled.div`
  width: 85%;
  /* margin: 0.5rem auto; */
  padding-top: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* overflow: hidden; */
`;
const CardHeader = styled.div`
  /* height: 25vh; */
  min-height: 220px;
  width: 100%;
  position: relative;
`;

const CardBody = styled.div`
  background-color: ${(p) => p.theme.palette.background.paper};
  /* height: 70vh; */
  position: relative;
  padding: 10px;
`;

// const Img = styled.img`
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
//   z-index: -1;
//   position: relative;
// `;

const hoverBg = `rgba(150, 150, 150, 0.4)`;
const Tech = styled.div`
  color: blue;
  background-color: ${hoverBg};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;
`;

const Title = styled(Typography)`
  padding-top: 18%;
  color: ${(p) => p.theme.palette.text.primary};
`;
const SubTitle = styled(Typography)`
  font-weight: 300;
  color: ${(p) => p.theme.palette.text.secondary};
  margin-top: 15px;
`;

const Description = styled.div`
  max-height: 25vh;
  height: 25vh;
  min-height: 25vh;
  overflow-y: scroll;
`;

const Links = styled.div`
  background-color: ${(p) => p.theme.palette.background.paper};
  padding-top: 10px;
`;

function MobileProjectCard({ project, screenType }) {
  const {
    title,
    img,
    subtitle,
    description,
    status,
    tech,
    date,
    git,
    website,
    preview,
  } = project;
  return (
    <Card>
      <Grid container direction="column" justify="center" alignItems="stretch">
        <Grid item xs={12} zeroMinWidth>
          <CardHeader>
            {/* <Img src={img} /> */}
            <ImgContainer img={img} mobile={true} desktop={false} />
            <Tech>
              <TechStack tech={tech} mobile={true} />
            </Tech>
          </CardHeader>
        </Grid>
        <Grid item xs={12}>
          <CardBody>
            <StatusChip status={status} size="small" />
            <Title variant="h3" display="block" noWrap={true} align="left">
              {title}
            </Title>
            <SubTitle
              variant="subtitle1"
              display="block"
              noWrap={true}
              align="left"
            >
              {subtitle}
            </SubTitle>
            <Description>
              <Typography variant="body1" display="block" align="left">
                {description}
              </Typography>
            </Description>
          </CardBody>
          <Links>
            <Icons git={git} website={website} preview={preview} />
          </Links>
        </Grid>
      </Grid>
    </Card>
  );
}

export default MobileProjectCard;
