import { Card, Heading, List, Subheading, TextContainer, Page } from "@shopify/polaris";

const Index = () => (
  <Page>
    <TextContainer>
      <Heading>Immersive Product Display -- Theme App Extension</Heading>

      <Card title="Welcome!" sectioned>
        <p>The "Immersive Product Display" section provided by this app allows Shopify stores to share compelling 3D and AR product collections.</p>
      </Card>

    </TextContainer>
    <TextContainer>
      <br />
      <Heading>App Extension and Onboarding Information</Heading>
      <p>All settings for this app are accessed through your store's editor.</p>


      <Card title="Add App Block" sectioned>
        <p>You can add the 'Immersive Product Display' to your product pages or home page, in your store's theme editor.
        To add as a section:  click "Add Section" then under "Apps" select "Immersive Product Display".
        To add as a block within an "App" section: click "Add Block" then under "Apps" select "Immersive Product Display".</p>
      </Card>


      <Card title="Remove App Block" sectioned>
        <p>You can remove the 'Immersive Product Display' App Blocks in to your store's theme editor.
          Select the App Block you want to remove, then select "Remove Block".</p>
      </Card>


      <Card title="Reorder App Blocks" sectioned>
        <p>You can reorder an 'Immersive Product Display' App Block in to your store's theme editor.
        In the column that lists all the current page's sections and blocks, select the section for "App", then while clicking down on the dots beside the "eyeball" icon, drag the section to where you'd like.
      To reorder a block within the "App" section, drag the block like you would a section and move it within the section. </p>
      </Card>

      <Card title="Activate and Deactivate App Embed Blocks" sectioned>
        <p>This app includes no App Embed blocks so there is no need to activate or deactivate any embed blocks.</p>
      </Card>

      <Card title="Configure functional settings" sectioned>
        <p>Within the App Block's settings, in the theme editor, there are five options to configure.</p>

        <List type="number">
          <List.Item>Heading: Edit Heading Message</List.Item>
          <List.Item>Subheading: Edit Subheading Message</List.Item>
          <List.Item>Collection: Select a collection to show all the products in that collection that have 3D models</List.Item>
          <List.Item>Max # of items to display: Choose the maximum number of products to display can be specified (up to 9 products -- provided they have models)</List.Item>
          <List.Item>Place AR on Walls: Check this box to have the viewer place the products on walls in AR mode </List.Item>
        </List>
      </Card>


    </TextContainer>

  </Page>
);

export default Index;
