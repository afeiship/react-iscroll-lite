import IscrollLite from './main';
import './dev.scss';


class App extends React.Component{
  componentDidMount(){
    this._instnace=this.refs.test;
  }

  _click(){
    this._instnace.invoke('scrollTo',0,-200);
  }

  render(){
    return (
      <div className="hello-iscroll">
        <header id="header" onClick={this._click.bind(this)}>
          Header
        </header>
        <IscrollLite cssClass="wrapper2" ref="test" iscrollOptions={{
            scrollX:true,
            scrollY:false
          }} >
          <ul>
      			<li>Pretty row 1</li>
      			<li>Pretty row 2</li>
      			<li>Pretty row 3</li>
      			<li>Pretty row 4</li>
      			<li>Pretty row 5</li>
      			<li>Pretty row 6</li>
      			<li>Pretty row 7</li>
      			<li>Pretty row 8</li>
      			<li>Pretty row 9</li>
      			<li>Pretty row 10</li>
      			<li>Pretty row 11</li>
      			<li>Pretty row 12</li>
      			<li>Pretty row 13</li>
      			<li>Pretty row 14</li>
      			<li>Pretty row 15</li>
      			<li>Pretty row 16</li>
      			<li>Pretty row 17</li>
      			<li>Pretty row 18</li>
      			<li>Pretty row 19</li>
      			<li>Pretty row 20</li>
      			<li>Pretty row 21</li>
      			<li>Pretty row 22</li>
      			<li>Pretty row 23</li>
      			<li>Pretty row 24</li>
      			<li>Pretty row 25</li>
      			<li>Pretty row 26</li>
      			<li>Pretty row 27</li>
      			<li>Pretty row 28</li>
      			<li>Pretty row 29</li>
      			<li>Pretty row 30</li>
      			<li>Pretty row 31</li>
      			<li>Pretty row 32</li>
      			<li>Pretty row 33</li>
      			<li>Pretty row 34</li>
      			<li>Pretty row 35</li>
      			<li>Pretty row 36</li>
      			<li>Pretty row 37</li>
      			<li>Pretty row 38</li>
      			<li>Pretty row 39</li>
      			<li>Pretty row 40</li>
      			<li>Pretty row 41</li>
      			<li>Pretty row 42</li>
      			<li>Pretty row 43</li>
      			<li>Pretty row 44</li>
      			<li>Pretty row 45</li>
      			<li>Pretty row 46</li>
      			<li>Pretty row 47</li>
      			<li>Pretty row 48</li>
      			<li>Pretty row 49</li>
      			<li>Pretty row 50</li>
      		</ul>
        </IscrollLite>


        <IscrollLite cssClass="wrapper" ref="test">
          <ul>
      			<li>Pretty row 1</li>
      			<li>Pretty row 2</li>
      			<li>Pretty row 3</li>
      			<li>Pretty row 4</li>
      			<li>Pretty row 5</li>
      			<li>Pretty row 6</li>
      			<li>Pretty row 7</li>
      			<li>Pretty row 8</li>
      			<li>Pretty row 9</li>
      			<li>Pretty row 10</li>
      			<li>Pretty row 11</li>
      			<li>Pretty row 12</li>
      			<li>Pretty row 13</li>
      			<li>Pretty row 14</li>
      			<li>Pretty row 15</li>
      			<li>Pretty row 16</li>
      			<li>Pretty row 17</li>
      			<li>Pretty row 18</li>
      			<li>Pretty row 19</li>
      			<li>Pretty row 20</li>
      			<li>Pretty row 21</li>
      			<li>Pretty row 22</li>
      			<li>Pretty row 23</li>
      			<li>Pretty row 24</li>
      			<li>Pretty row 25</li>
      			<li>Pretty row 26</li>
      			<li>Pretty row 27</li>
      			<li>Pretty row 28</li>
      			<li>Pretty row 29</li>
      			<li>Pretty row 30</li>
      			<li>Pretty row 31</li>
      			<li>Pretty row 32</li>
      			<li>Pretty row 33</li>
      			<li>Pretty row 34</li>
      			<li>Pretty row 35</li>
      			<li>Pretty row 36</li>
      			<li>Pretty row 37</li>
      			<li>Pretty row 38</li>
      			<li>Pretty row 39</li>
      			<li>Pretty row 40</li>
      			<li>Pretty row 41</li>
      			<li>Pretty row 42</li>
      			<li>Pretty row 43</li>
      			<li>Pretty row 44</li>
      			<li>Pretty row 45</li>
      			<li>Pretty row 46</li>
      			<li>Pretty row 47</li>
      			<li>Pretty row 48</li>
      			<li>Pretty row 49</li>
      			<li>Pretty row 50</li>
      		</ul>
        </IscrollLite>
        <footer id="footer">Footer</footer>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
