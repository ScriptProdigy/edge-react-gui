import React, { Component } from 'react'
import { View, Text, Platform} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './style'
import Modal from 'react-native-modal'
import LinearGradient from 'react-native-linear-gradient'
import FormattedText from '../FormattedText'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import MAIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import {border} from '../../../../util/border'

class StylizedModal extends Component {
    constructor(props) {
        super(props)
    }

    render = () => {
        return(
            <Modal isVisible={this.props.visibilityBoolean} style={[styles.topLevelModal, {marginLeft: 20, marginRight: 20, marginTop: 20}, border('yellow')]}>                   
                <View style={[styles.modalBox, border('red')]}>
                    <View style={[styles.modalBody, border('purple')]}>
                        <View style={[styles.modalTopTextWrap,  border('blue')]}>
                            <FormattedText style={[styles.modalTopText, border('yellow')]}>{this.props.headerText}</FormattedText>
                            {this.props.headerSubtext && 
                                <FormattedText numberOfLines={2} style={[styles.modalTopSubtext, border('green')]}>{this.props.headerSubtext}</FormattedText>                            
                            }
                        </View>
                        <View style={[styles.modalMiddle, border('brown')]}>
                            {this.props.modalMiddle}
                        </View>
                        <View style={[styles.modalBottom, border('green')]}>
                            {this.props.modalBottom}
                        </View>
                    </View>
                </View>
                {Platform.OS === 'ios' && 
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={[styles.modalHeaderIconWrapBottom]} colors={['#3B7ADA', '#2B5698']}>
                    <View style={styles.modalHeaderIconWrapTop}>
                        {this.props.featuredIcon}  
                    </View>
                </LinearGradient>
                }                 
            </Modal> 
        )       
    }

}

StylizedModal.propTypes = {
  visibilityBoolean: PropTypes.bool
}

export default connect(state => ({

}))(StylizedModal)