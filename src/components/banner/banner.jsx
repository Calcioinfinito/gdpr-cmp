import { h, Component } from 'preact';
import style from './banner.less';
import Label from '../label/label';
import Panel from '../panel/panel';
import ChevronIcon from '../chevronicon/chevronicon';

class LocalLabel extends Label {
	static defaultProps = {
		prefix: 'banner'
	};
}

const PANEL_COLLECTED = 0;
const PANEL_PURPOSE = 1;

const BANNER_OFFSET = 20;

export default class Banner extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isExpanded: false,
			selectedPanelIndex: 0,
		};
	}

	handleInfo = (index) => () => {
		const {isExpanded, selectedPanelIndex} = this.state;
		this.setState({
			selectedPanelIndex: index,
			isExpanded: index !== selectedPanelIndex || !isExpanded
		});
	};

	handleWindowClick = e => {
		if (!this.bannerRef || !this.bannerRef.contains(e.target)) {
			this.props.onSave();
		}
	};

	handleLearnMore = () => {
		this.props.onShowModal(true);
	};

	render(props, state) {
		const {isShowing, onSave} = props;
		const {selectedPanelIndex, bannerBottom, isExpanded} = state;

		return (
			<a onClick={this.handleLearnMore}><LocalLabel localizeKey='links.manage'>Learn More</LocalLabel></a>
		);
	}
}
