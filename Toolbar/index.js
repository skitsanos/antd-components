import { Button, Icon, Tooltip } from 'antd';
import React from 'react';

class Toolbar extends React.PureComponent
{
  render()
  {
    const { items, buttonSize, style, dividerStyle, iconStyle } = this.props;

    const styleToolbar = Object.assign({
      display: 'flex', flexDirection: 'row', alignItems: 'center'
    }, style);

    return <div className={'Toolbar'} style={styleToolbar}>
      {items.map((action, key) =>
      {
        //render separator
        if (Object.keys(action).length === 0)
        {
          return <span key={`table-action-${key}`}
                      style={dividerStyle}
                      className={`ToolbarSeparator`}/>;
        }

        //render component as is
        if (action.type && action.type.toLowerCase() === 'component')
        {
          return <React.Fragment key={`table-action-${key}`}>{action.component}</React.Fragment>;
        }

        //render button
        return <Tooltip key={`table-action-${key}`} title={action.tooltip}>
          {typeof action.icon === 'string' &&
          <Button size={buttonSize}
                  className={`ToolbarButton ${key !== 0 ? 'ml' : ''}`}
                  type={action.type}
                  shape={'circle'}><Icon type={action.icon} style={iconStyle}/></Button>
          }

          {typeof action.icon === 'object' &&
          <Button size={buttonSize}
                  className={'ToolbarButton mr'}
                  type={action.type}
                  shape={'circle'}>{action.icon}</Button>
          }
        </Tooltip>;
      })}
    </div>;
  }
}

Toolbar.defaultProps = {
  items: [],
  buttonSize: 'default',
  style: {},
  dividerStyle: {},
  iconStyle: {
    fontSize: '1rem',
    paddingTop: '0.2rem'
  }
};

export default Toolbar;
