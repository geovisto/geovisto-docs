/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


/**
 * Custom blog by Swizzle
 *
 * @author Iva Utikalova
 */

export default function BlogLayout(props) {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  const {siteConfig} = useDocusaurusContext();
  const {blogTitle, tagline} = siteConfig;
  return (
    <Layout {...layoutProps}>
      <div className="blog container margin-vert--lg">
        <div>{blogTitle}</div>

        <div className="row">
          {hasSidebar && (
            <aside className="col col--3">
              <BlogSidebar sidebar={sidebar} />
            </aside>
          )}
          <main
            className={clsx('col', {
              'col--7': hasSidebar,
              'col--9': !hasSidebar,
            })}
            itemScope
            itemType="http://schema.org/Blog">
            {children}
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
