import CocoDragger from './components/CocoDragger';
import ButtonPrinter from './components/ButtonPrinter';
import CocoAnimator from './components/CocoAnimator'
import Cards from './components/Cards';
import CocoDrawer from './components/CocoDrawer';

function App() {
  return (
    <>
      <CocoDrawer />
      <ButtonPrinter />
      <Cards />
      <CocoDragger />
      <CocoAnimator />
    </>
  )
}

export default App;
