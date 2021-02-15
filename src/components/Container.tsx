import styled from 'styled-components';

const ContainerWrapper = styled.div`
  max-width: 1100px;
`;

const Container: React.FC<{
  className?: string;
}> = props => {
  return (
    <ContainerWrapper className={`mx-auto ${props.className}`}>
      {props.children}
    </ContainerWrapper>
  );
};

export default Container;
