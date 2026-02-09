import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'customer/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'service-product-image-event/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'service-product-image-event',
    renderMode: RenderMode.Server
  },
  {
    path: 'ex13',
    renderMode: RenderMode.Server
  },
  {
    path: 'ex18',
    renderMode: RenderMode.Server
  },
  {
    path: 'ex19',
    renderMode: RenderMode.Server
  },
  {
    path: 'product',
    renderMode: RenderMode.Server
  },
  {
    path: 'list-product',
    renderMode: RenderMode.Server
  },
  {
    path: 'service-product',
    renderMode: RenderMode.Server
  },
  {
    path: 'ex50',
    renderMode: RenderMode.Client
  },
  {
    path: 'ex50/create',
    renderMode: RenderMode.Client
  },
  {
    path: 'ex50/edit/:id',
    renderMode: RenderMode.Client
  },
  {
    path: 'ex50/detail/:id',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
