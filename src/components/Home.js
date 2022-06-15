import React from 'react'
import styled from 'styled-components';
import ImgSlider from './slider';
import Car from './Car';
import './Home.css';

function Home() {

  const [play, setPlay] = React.useState('https://www.youtube.com/embed/pd2ItNB_Ob0');
  const myref=React.useRef(null);
  const executeScroll = () => myref.current.scrollIntoView()

  return (
    <div className="here">
    <Car/>
    <div ref={myref}></div>
    <div  className="sexer">
    <iframe  width="520" height="500" src={play} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
    <h2 className="section-title hi1">Informational</h2>

    <div class="media-scroller snaps-inline">
      <div class="media-element" onClick={() => {
        setPlay("https://www.youtube.com/embed/pd2ItNB_Ob0");executeScroll()}
        }>
        <img src="/images/Thumbnail.jpg" alt="" />
        <p class="title">Shaktimaan is Back | Shaktimaan Trilogy | Infotainment Bytes</p>
      </div>
      <div class="media-element" onClick={() => setPlay('https://www.youtube.com/embed/9YffrCViTVk')}>
        <img src="https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
        <p class="title">A longer title here</p>
      </div>
      <div class="media-element">
        <img src="https://images.unsplash.com/photo-1641841344411-49dbd02896f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
        <p class="title">An even longer title on this one</p>
      </div>
      <div class="media-element">
        <img src="https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
        <p class="title">A dog that's blinking?</p>
      </div>
      <div class="media-element">
        <img src="https://images.unsplash.com/photo-1640938776314-4d303f8a1380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
        <p class="title">Chair</p>
      </div>
      <div class="media-element">
        <img src="https://images.unsplash.com/photo-1641259041823-e09935369105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
        <p class="title">Ut enim ad minim veniam</p>
      </div>
    </div>
    
    <h2 class="section-title hi2">Entertainment</h2>
    <div class="media-scroller snaps-inline">
      <div class="media-element" onClick={() => setPlay("https://www.youtube.com/embed/R_OERlafbmw")}>
        <img src="/images/Thumbnail.jpg" alt="" />
        <p class="title">Short title</p>
      </div>
      <div class="media-element" onClick={() => setPlay('https://www.youtube.com/embed/9YffrCViTVk')}>
        <img src="https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
        <p class="title">A longer title here</p>
      </div>
      <div class="media-element">
        <img src="https://images.unsplash.com/photo-1641841344411-49dbd02896f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
        <p class="title">An even longer title on this one</p>
      </div>
      <div class="media-element">
        <img src="https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
        <p class="title">A dog that's blinking?</p>
      </div>
      <div class="media-element">
        <img src="https://images.unsplash.com/photo-1640938776314-4d303f8a1380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
        <p class="title">Chair</p>
      </div>
      <div class="media-element">
        <img src="https://images.unsplash.com/photo-1641259041823-e09935369105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
        <p class="title">Ut enim ad minim veniam</p>
      </div>
    </div>
    <h2 class="section-title hi3" >Shorts</h2>
    <div class="media-scroller snaps-inline">
      <div class="media-element" onClick={() => setPlay("https://www.youtube.com/embed/R_OERlafbmw")}>
        <img src="/images/Thumbnail.jpg" alt="" />
        <p class="title">Short title</p>
      </div>
      <div class="media-element" onClick={() => setPlay('https://www.youtube.com/embed/9YffrCViTVk')}>
        <img src="https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
        <p class="title">A longer title here</p>
      </div>
      <div class="media-element">
        <img src="https://images.unsplash.com/photo-1641841344411-49dbd02896f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
        <p class="title">An even longer title on this one</p>
      </div>
      <div class="media-element">
        <img src="https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
        <p class="title">A dog that's blinking?</p>
      </div>
      <div class="media-element">
        <img src="https://images.unsplash.com/photo-1640938776314-4d303f8a1380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
        <p class="title">Chair</p>
      </div>
      <div class="media-element">
        <img src="https://images.unsplash.com/photo-1641259041823-e09935369105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400" alt=""/>
        <p class="title">Ut enim ad minim veniam</p>
      </div>
    </div>
    </div>
  )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;   