---
title: "ASP.NET Core Interview Question: What is startup class?"
description: "At the heart of every ASP.NET lies the startup class"
published: true
date: 2021-08-24T20:35:00.000Z
author: amirdaraee
slug: "what_is_startup_class"
photo: assets/stock/start-stop-engine-car.jpg
imgCredit: pxfuel.com
keywords:
  - ASP.NET Core
language: en
output:
  html_document: { css: post-details.component.css }
slugs:
  - what_is_startup_class
---

# ASP.NET Core Interview Question: What is startup class

At the heart of every ASP.NET Core projects lies the startup class. Basicly it's the starting point of your application and as a developer we will need to make changes to this class pretty often.

There are some notable methods in startup class:

**1- Constructor:** It takes an IConfiguration value which will give us access to settings in appSettings.json and appSettings.Development.json.

```csharp
public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
}
```

**2- ConfigureServices:** It takes an IServiceCollection value which will allow us to register frameworks and dependencies.

```csharp
// This method gets called by the runtime. Use this method to add services to the container.
public void ConfigureServices(IServiceCollection services)
{
    services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlServer(
            Configuration.GetConnectionString("DefaultConnection")));
    services.AddDatabaseDeveloperPageExceptionFilter();
    services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
        .AddEntityFrameworkStores<ApplicationDbContext>();
    services.AddControllersWithViews();
}
```

**3- Configure Method:** It takes IApplicationBuilder and IWebHostEnvironment which will help us setup our runtime request pipeline.

```csharp
// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
        app.UseMigrationsEndPoint();
    }
    else
    {
        app.UseExceptionHandler("/Home/Error");
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
    }
    app.UseHttpsRedirection();
    app.UseStaticFiles();
    app.UseRouting();
    app.UseAuthentication();
    app.UseAuthorization();
    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllerRoute(
            name: "default",
            pattern: "{controller=Home}/{action=Index}/{id?}");
        endpoints.MapRazorPages();
    });
}
```

