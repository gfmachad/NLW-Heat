import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useAuth } from '../../hooks/auth'
import LogoSvg from '../../assets/logo.svg'
import { UserPhoto } from '../UserPhoto'
import { styles } from './styles'

export function Header() {
	const { user, signOut } = useAuth()
	return (
		<View style={styles.container}>
			<LogoSvg />

			<View style={styles.logoutBtn}>
				{user && (
					<TouchableOpacity onPress={signOut}>
						<Text style={styles.logoutText}> Logout</Text>
					</TouchableOpacity>
				)}

				<UserPhoto imageUri={user?.avatar_url} />
			</View>
		</View>
	)
}
