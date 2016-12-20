import './style.scss';
import IScroll from 'iscroll/build/iscroll-lite';
import classNames from 'classnames';

/*
iscroll-lite.js
it is a stripped down version of the main script.
It doesn't support snap, scrollbars, mouse wheel, key bindings.
But if all you need is scrolling (especially on mobile) iScroll lite is the smallest, fastest solution.
*/

class IscollLite extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    iscrollOptions:React.PropTypes.object
  };

  static defaultProps = {
    cssClass:'wrapper',
    iscrollOptions:{},
    scrollerBound:{}
  };

  componentDidMount(){
    this._iscroll =new IScroll(`.${this.props.cssClass}`, this.props.iscrollOptions);
    this.preventDocDefault();
  }

  preventDocDefault(){
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
  }

  invoke(inName){
    var args = [].slice.call(arguments, 1);
    return this._iscroll[inName].apply(this._iscroll, args);
  }

  render(){
    return (
      <div className={classNames('react-iscroll-wrapper',this.props.cssClass)}>
        <div className={classNames('react-iscroll-scroll',`${this.props.cssClass}-scroller`)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default IscollLite;
