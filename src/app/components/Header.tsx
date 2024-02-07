import styled from 'styled-components';
import BaseIconButton from './Base/BaseIconButton';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Header() {
  const imageUrl =
    'https://images.generated.photos/_Cr4TNeZYVx577ko6ys2AloEATdCPrW1SjPle75b7mk/rs:fit:256:256/' +
    'czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTQ0NzkyLmpwZw.jpg';

  return (
    <HeaderContainer>
      <BaseIconButton imageUrl={imageUrl}></BaseIconButton>
      <BaseIconButton icon="bell"></BaseIconButton>
    </HeaderContainer>
  );
}
