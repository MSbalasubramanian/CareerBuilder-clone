import { React, useState } from 'react';

//svg
import { ReactComponent as Plus } from '../Assets/plus.svg';
import { ReactComponent as Minus } from '../Assets/minus.svg';

//Components
import Button from './Button';

function FilterListEach(props) {
  const [openFilterList, setOpenFilterList] = useState(false);
  const [increaseFilter, setIncreaseFilter] = useState(true);

  return (
    <>
      {props.content.map((singleEntry, index) => (
        <section>
          <div className="left">
            <h1>{singleEntry.heading}</h1>
            {openFilterList && (
              <form>
                {singleEntry.items.length > 8 && increaseFilter
                  ? singleEntry.items
                      .filter((_, inx) => inx < 8)
                      .map((item) => (
                        <div>
                          <input
                            type={singleEntry.type}
                            name={singleEntry.type}
                          />
                          <label>{item}</label>
                        </div>
                      ))
                  : singleEntry.items.map((item) => (
                      <div>
                        <input
                          type={singleEntry.type}
                          name={singleEntry.type}
                        />
                        <label>{item}</label>
                      </div>
                    ))}
              </form>
            )}
          </div>
          {singleEntry.items.length > 8 ? (
            <>
              <div className="right">
                <a href="#" onClick={() => OpenlistView(index)} index={index}>
                  {!openFilterList ? (
                    <strong>
                      <Plus className="plus" width="18px" height="18px" />
                    </strong>
                  ) : (
                    <strong>
                      <Minus className="minus" width="18px" height="18px" />
                    </strong>
                  )}
                </a>
              </div>
              {openFilterList && (
                <Button
                  name={increaseFilter ? 'View more' : 'View less'}
                  bg={false}
                  openInc={OpenIncrease}
                  filterOnclick={true}
                />
              )}
              <span></span>
            </>
          ) : (
            <>
              <div className="right">
                <a href="#" onClick={OpenlistView} index={index}>
                  {!openFilterList ? (
                    <Plus className="plus" width="18px" height="18px" />
                  ) : (
                    <Minus className="minus" width="18px" height="18px" />
                  )}
                </a>
              </div>
              <span></span>
            </>
          )}
        </section>
      ))}
    </>
  );

  function OpenlistView() {
    setOpenFilterList(!openFilterList);
  }
  function OpenIncrease() {
    setIncreaseFilter(!increaseFilter);
  }
}

export default FilterListEach;
