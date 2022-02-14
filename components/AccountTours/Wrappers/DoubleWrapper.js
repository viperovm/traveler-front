const DoubleWrapper = ({ children, ratio,  }) => {
  return (
    <div className={`double-wrapper ratio-${ratio}`}>
      <div className={`children-wrapper ratio-${ratio}`}>
        {children &&
          children.map((el, index) => (
            <div key={index} className='double-wrapper-item'>
              <div className='input-label'>{el.props.label}</div>
              {el}
            </div>
          ))}
      </div>
    </div>
  )
}

export default DoubleWrapper
