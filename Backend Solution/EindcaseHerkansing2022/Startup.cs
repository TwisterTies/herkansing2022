using EindcaseHerkansing2022.Addons;
using EindcaseHerkansing2022.Addons.FileSplitter;
using EindcaseHerkansing2022.Data;
using EindcaseHerkansing2022.Interfaces.CourseImport;
using EindcaseHerkansing2022.Interfaces.CourseOverview;
using EindcaseHerkansing2022.Addons.Interfaces;
using EindcaseHerkansing2022.Repositories;
using EindcaseHerkansing2022.Services;
using Microsoft.EntityFrameworkCore;

namespace EindcaseHerkansing2022;

public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    private IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {

        services.AddControllers();

        services.AddDbContext<CourseContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DockerConnection")));
        
        services.AddScoped<ICourseOverviewService, CourseOverviewService>();
        services.AddScoped<ICourseOverviewRepository, CourseOverviewRepository>();
        
        services.AddScoped<ICourseImportService, CourseImportService>();
        services.AddScoped<ICourseImportRepository, CourseImportRepository>();
        
        services.AddScoped<ICourseFileSplitter, CourseFileSplitter>();
        
        services.AddScoped<ITitleSplitter, TitleSplitter>();
        services.AddScoped<ICourseSplitter, CourseSplitter>();
        services.AddScoped<IDurationSplitter, DurationSplitter>();
        services.AddScoped<IStartDateSplitter, StartDateSplitter>();
        services.AddScoped<ICodeSplitter, CodeSplitter>();
        
        services.AddCors();
    }
        
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseCors(options =>
            options.WithOrigins("http://localhost:4200")
                .AllowAnyMethod()
                .AllowAnyHeader());

        app.UseHttpsRedirection();

        app.UseRouting();

        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }
}