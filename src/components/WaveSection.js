import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import global from './global'
import Waves from './Waves';
import {useWindowWidth} from '../hooks';

const getSectionWidth = props => (props.width ? `${props.width}px` : '100vw');

const Wrapper = styled.div`
	${props => (props.disableTopMargin ? 'margin-top: -6rem;' : '')}
	main > &:first-child {
		margin-top: -6rem;
	}
	& ~ * {
		position: relative;
		z-index: 2;
	}
	& ~ & {
		z-index: 1;
	}
	@media (max-width: 699px) {
		${props => (props.footer ? '' : 'margin-left: -2rem;')}
		padding: 0 2rem;
	}
`;

const Skew = styled.div`
	position: relative;
	transform: skew(0, var(--skew));
	&:not(:first-child) {
		${props => (props.footer ? '' : 'z-index: -1;')}
	}
	& ~ * {
		position: relative;
		z-index: 2;
	}
`;

const Section = styled.div`
	color: var(--dark);
	${props => `
        margin: 0 -2rem;
        @media (min-width: 700px) {
            & {
                margin: 0;
                width: ${getSectionWidth (props)};
            }
        }
		`}
	${props => (props.footer ? `
		&:after {
			background: var(--primary);
			content: '';
			height: 100vh;
			left: 0;
			position: absolute;
			right: 0;
			top: 80%;
			@media (max-width: 699px) {
				left: -2rem;
				right: -2rem;
			}
		}
	` : '')}
`;

const Content = styled.div`
	margin: 0 2rem;
	max-width: 640px;
	padding: calc(2rem + 1vw) 0;
	position: relative;
	transform: skew(0, calc(0deg - var(--skew)));
	z-index: 2;
	@media (min-width: 680px) {
		& {
			margin: 0 auto;
		}
	}
	> :first-child,
	> * > :first-child {
		margin-top: 0;
	}
	a {
		--background: var(--source);
		--primary: var(--dark);
		--secondary: var(--secondary-dark);
		&:link,
		&:visited {
			color: var(--primary);
		}
		&:link:hover,
		&:visited:hover {
			color: var(--secondary);
		}
	}
`;

const WaveSection = ({as, children, disableTopMargin, footer}) => {
  const width = useWindowWidth ();
  useEffect (() => {
    if (!global.firstTimeRender) {
      global.firstTimeRender = true
    }
  });
  if(!global.firstTimeRender){
	  return <div style={{height:468}}></div>
  }
	global.renders += 1
	console.log(global.renders)
  return (
    <Wrapper disableTopMargin={disableTopMargin} footer={footer} width={width}>
      <Skew footer={footer}>
        <Section width={width} as={as} footer={footer}>
          <Waves />
          <div className="wave-content-wrapper">
            <Content className={global.renders === 1? "fade-in" : ""}>{children}</Content>
          </div>
          <Waves invert offset />
        </Section>
      </Skew>
    </Wrapper>
  );
};

export default WaveSection;
