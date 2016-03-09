# Setup

```
git clone https://github.com/rangle/react-training

npm install -g jspm
npm install
jspm install

npm run dev
```

## Troubleshooting

**jspm complains that `github rate limit reached`**

1. Go to [github.com](https://github.com), login and click `settings`
2. Click Personal access tokens and then `Generate new token` (make sure to enable all the options you want)
3. Copy the token and start command line inside the project folder
4. Run `jspm registry config github`
