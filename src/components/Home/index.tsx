import * as S from './styled'

const Home = () => {
  const LOGO_URL = '/static/logo.svg'
  return (
    <S.AppContainer>
      <S.AppHeaderWrapper>
        <S.LogoWrapper src={LOGO_URL} alt={'logo'} />
        <p>
          {'Edit '}
          <code>{'src/App.tsx'}</code> {'and save to reload.'}
        </p>
        <S.AppLink
          href={'https://reactjs.org'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          {'Learn React'}
        </S.AppLink>
      </S.AppHeaderWrapper>
    </S.AppContainer>
  )
}

export default Home
