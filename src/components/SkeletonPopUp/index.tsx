import React from "react"
import ContentLoader from "react-content-loader"
import style from './SkeletonPopUp.module.scss'

const SkeletonPopUp:React.FC = () => (
  <div className={style.skeleton}>
    <ContentLoader 
      className={style.background}
      speed={2}
      width={320}
      height={541}
      viewBox="0 0 320 541"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="11" y="300" rx="10" ry="10" width="287" height="150" /> 
      <rect x="79" y="479" rx="14" ry="14" width="155" height="45" /> 
      <circle cx="151" cy="151" r="140" />
    </ContentLoader>
  </div>
)

export default SkeletonPopUp