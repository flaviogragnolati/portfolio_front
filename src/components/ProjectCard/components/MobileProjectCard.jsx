import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import img from 'assets/img/project1.jpg';
import Icons from './Icons';
import TechStack from './TechStack';
import StatusChip from './StatusChip';

const Card = styled.div`
  width: 88%;
  margin: 0.5rem auto;
  /* overflow: hidden; */
`;
const CardHeader = styled.div`
  background-color: red;
  height: 30vh;
  /* position: relative; */
  /* z-index: 0; */
`;

const CardBody = styled.div`
  background-color: ${(p) => p.theme.palette.background.paper};
  height: 70vh;
  position: relative;
  padding: 0.1rem;
  z-index: 1;
`;

const Img = styled.img`
  object-fit: cover;
`;
const hoverBg = `rgba(150, 150, 150, 0.4)`;
const Tech = styled.div`
  color: ${(p) => p.theme.palette.secondary.dark};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0%;
  margin: auto;
  transition: left 0.2s;
  background: ${hoverBg};
  padding: 10px;
  width: 100%;
`;

const Title = styled.h3`
  line-height: 1;
  padding-top: 18%;
  font-size: 1.7rem;
  color: ${(p) => p.theme.palette.text.primary};
`;
const SubTitle = styled.h4`
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${(p) => p.theme.palette.text.secondary};
  margin-top: 15px;
`;

function MobileProjectCard({ project }) {
  const {
    title,
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
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        wrap="nowrap"
      >
        <Grid item xs={12} zeroMinWidth>
          <CardHeader>
            {/* <img src={img} alt="project img" /> */}
            <Img src={img} />
            {/* 
            <Tech>
              <TechStack tech={tech} mobile={true} />
            </Tech> */}
          </CardHeader>
        </Grid>
        <Grid item xs={12}>
          <CardBody>
            {/* <StatusChip status={status} size="small" />
            <Title>
              {title}
              {title}
            </Title>
            <SubTitle>{subtitle}</SubTitle>
            <Typography variant="body">{description}</Typography> */}
          </CardBody>
        </Grid>
      </Grid>
    </Card>
  );
}

export default MobileProjectCard;
