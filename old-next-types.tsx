import React from "react";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";

namespace ServerSide {
  export const getServerSideProps: GetServerSideProps<
    SomeNextPageProps,
    SomeNextPageParams
  > = async ({ locale, params }) => {
    if (true) {
      return {
        notFound: true,
      };
    }
    return {
      props: { a: 1 },
    };
  };

  const SomeNextPage = ({}: SomeNextPageProps) => {
    return <div>SomeNextPage</div>;
  };

  type SomeNextPageProps = {
    a: number;
  };

  type SomeNextPageParams = {
    slug: string;
  };
}

namespace ISR {
  export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    return {
      paths: [""],
      fallback: "blocking",
    };
  };

  export const getStaticProps: GetStaticProps<
    SomeNextPageProps,
    SomeNextPageParams
  > = async ({ locale, params }) => {
    if (false) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        a: 1,
      },
      revalidate: 100,
    };
  };

  const SomeNextPage = ({}: SomeNextPageProps) => {
    return <div>SomeNextPage</div>;
  };

  type SomeNextPageProps = {
    a: number;
  };

  type SomeNextPageParams = {
    slug: string;
  };
}
