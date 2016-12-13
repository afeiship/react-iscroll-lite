import './style.scss';
import IScroll from 'iscroll/build/iscroll-lite';
import classNames from 'classnames';


let uid = 0;
let instanceMap = {};
/*
iscroll-lite.js
it is a stripped down version of the main script.
It doesn't support snap, scrollbars, mouse wheel, key bindings.
But if all you need is scrolling (especially on mobile) iScroll lite is the smallest, fastest solution.
*/

class IscollLite extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    delegateHandle:React.PropTypes.string,
    iscrollOptions:React.PropTypes.object
  };

  static defaultProps = {
    cssClass:'wrapper',
    delegateHandle:'',
    iscrollOptions:{}
  };

  static createIscroll(inProps){
    return new IScroll(`.${inProps.cssClass}`, inProps.iscrollOptions);
  }

  static getInstance(inHandle){
    return instanceMap[inHandle];
  }

  constructor(inProps){
    super(inProps);
    instanceMap[inProps.delegateHandle] = this;
  }

  componentDidMount(){
    this._iscroll = IscollLite.createIscroll(this.props);
  }

  invoke(inName){
    var args = [].slice.call(arguments, 1);
    return this._iscroll[inName].apply(this._iscroll, args);
  }

  render(){
    return (
      <div data-delegate-handle={this.props.delegateHandle} className={classNames('react-iscroll-wrapper',this.props.cssClass)}>
        <div className={classNames('react-iscroll-scroll',`${this.props.cssClass}-scroller`)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default IscollLite;
