const clientId = 'd9a44706f05e4c70a45fccfa2bad0007'
const accessToken = '';
const redirectUri = 'http://localhost:3000';

const Spotify = {
	getAccessToken() {
		if(accessToken !== '') {
			return accessToken
		}

		let token = window.location.href.match(/access_token=([^&]*)/);
		let expire = window.location.href.match(/expires_in=([^&]*)/);

		if (this.token === this.expire) {
			accessToken = token[1];
			let expiresIn = time(expire[1]);

			window.setTimeout(() => accessToken = '', expiresIn * 1000);
			window.history.pushState('Access Token', null, '/');

			return accessToken;
		} else {
			window.location = 'https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}'
		}

	}
}

export default Spotify;