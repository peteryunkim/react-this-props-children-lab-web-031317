import React from 'react'

const ThemedDecorations = (props) => {
	const themedParty = React.Children.map( props.children, peter => {
		return React.cloneElement( peter, {
			className: props.theme
		})
	})

	return (
		<div>
			{themedParty}
		</div>
	)
}

// class ThemedDecorations extends React.Component{
// 	render(){
// 		const themedParty = React.children.map( this.props.children, child => {
// 			return React.cloneElement( child, {
// 				className: this.props.theme
// 			})
// 		})

// 		return (
// 			<div>
// 				{themedParty}
// 			</div>
// 		)
	// }
// }

export default ThemedDecorations