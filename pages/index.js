import React from "react";
import Link from "next/link";

const List = (props) => <ul style={{ listStyleType: "none", display: "inline" }}>{props.children}</ul>;

const ListItem = (props) => <li style={{ padding: "0.5rem" }}>{props.children}</li>;

const ParagraphItem = (props) => <p style={{ margin: "0rem" }}>{props.children}</p>;

const SpanItem = (props) => Array.from(Array(props.count), (e, i) => <span key={i}>⭐</span>);

const Home = ({ repositories }) => {
  return (
    <>
      <header>
        <h1>Home</h1>
        <Link href="/blog">Go to Blog</Link>
      </header>
      <main>
        <List>
          {repositories.map((repo) => (
            <ListItem key={repo.id}>
              <ParagraphItem>
                {repo.name}
                <SpanItem count={repo.stargazers_count} />
              </ParagraphItem>
            </ListItem>
          ))}
        </List>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/luisvalgoi/repos");
  const repositories = await res.json();
  return {
    props: {
      repositories,
    },
  };
}

export default Home;
