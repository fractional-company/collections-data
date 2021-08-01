# @fractional-company/collections-data

List of verified collections. It adds the verified badge to a vault/NFT.

NOTE: This is a temporary repo, list will be migrated into a contract.

## Adding new collection

Edit the collections.json & submit a PR.

```
Structure
{
  "collection": "[ Collection Name ]",
  "contracts": [
    {
      "address": "[ Contract Address ]",
      "tokenIds": [Token Ids] # Optional, if filled only token ids provided will be marked as verified.
    }
  ]
}
```

## Development

### Commands

```sh
npm install / yarn install
```

## Usage

### Commands

```sh
npm test # run tests with Jest
npm run coverage # run tests with coverage and open it on browser
npm run lint # lint code
npm run docs # generate docs
npm run build # transpile code and build module
```

### Publish

```sh
npm run release
npm publish
```

It'll automatically run `test`, `lint`, `docs`, `build`, generate `CHANGELOG.md`, and push commits and tags to the
remote repository.

