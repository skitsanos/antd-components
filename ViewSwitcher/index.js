import {Button} from 'antd';
import React from 'react';

class ViewSwitcher extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            view: 'list'
        };
    }

    render()
    {
        return <>
            <Button size={'small'}
                    icon={'table'}
                    type={this.state.view === 'list' ? 'primary' : 'default'}
                    style={{marginLeft: '0.3rem'}}
                    onClick={() =>
                    {
                        this.setState({view: 'list'});

                        if (Object.prototype.hasOwnProperty.call(this.props, 'onChange'))
                        {
                            this.props.onChange('list');
                        }
                    }}/>

            <Button size={'small'}
                    icon={'border'}
                    type={this.state.view === 'cards' ? 'primary' : 'default'}
                    style={{marginLeft: '0.3rem'}}
                    onClick={() =>
                    {
                        this.setState({view: 'cards'});

                        if (Object.prototype.hasOwnProperty.call(this.props, 'onChange'))
                        {
                            this.props.onChange('cards');
                        }
                    }}/>
        </>;
    }
}

export default ViewSwitcher;
