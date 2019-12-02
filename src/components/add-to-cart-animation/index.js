import TweenOne from "rc-tween-one"

import PathPlugin from "rc-tween-one/lib/plugin/PathPlugin"

export default (props) => {
  TweenOne.plugins.push(PathPlugin)

  // console.log(props)


  const animation = [{
    marginRight: -400,
    marginLeft:'110%',
    marginTop: -200,
    //yoyo: true,
    //repeat: -1,
    scale: 0.1,
    rotate: 180,
    duration: 1000,
    onComplete: props.complete,
  },
  //{opacity:0}
]

  return (
    <addToCartAnimation>
      <TweenOne animation={animation} paused={props.pause} moment={props.moment} >
        <codeBoxShape >{props.children}</codeBoxShape>
      </TweenOne>
      <style jsx>{`
        addToCartAnimation {
          margin: 60px 0px 60px 0px;
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding: 1rem;
        }

        codeBoxShape {
          position: absolute;
          top: 0;
          bottom: 0;
          right: auto;
          margin: auto;
          width: 150px;
          height: 150px;
          border-radius: 5px;
          background: #1890ff;
        }
      `}</style>
    </addToCartAnimation>
  )
}
