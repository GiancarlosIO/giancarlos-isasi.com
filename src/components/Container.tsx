import styled from 'styled-components';
import clsx from 'clsx';

const ContainerWrapper = styled.div`
  width: calc(100% - 32px);
  ${props => props.theme.breakpoints.mediaSm()} {
    max-width: 1100px;
  }
`;

const Container: React.FC<{
  className?: string;
}> = props => {
  return (
    <ContainerWrapper className={clsx('mx-auto', props.className)}>
      {props.children}
    </ContainerWrapper>
  );
};

export default Container;
