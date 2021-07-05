import React, { useState } from 'react';

const Accordion = ({ items }) => {

  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index,event) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index)
    }
  }

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title} >
        <div
          className={`title ${active}`}
          onClick={(event) => onTitleClick(index,event)}
        >
          <i className='dropdown icon' ></i>
          {item.title}
        </div>
        <div className={`content ${active}`} >
          <p className='transition' >
            {item.content}
          </p>
        </div>
      </React.Fragment>
    )
  });

  return (
    <div className='ui accordion'>
      {renderedItems}
    </div>
  );
};


export default Accordion;