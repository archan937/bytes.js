desc "Roll out a new release"
task :release, :version do |task, args|

  if (args[:version] || "").strip.empty?
    puts "usage: rake release[version]"
    exit
  end

  timestamp  = Time.now
  javascript = File.open("src/bytes.js").readlines.collect do |line|
    line.gsub(/\{(version|year|date)\}/) do |matched|
      case matched
      when "{version}"
        args[:version]
      when "{year}"
        timestamp.year.to_s
      when "{date}"
        timestamp.strftime("%Y-%m-%d %H:%M:%S +0100 (%a, %d %B %Y)")
      end
    end
  end

  # Define variables
  releases_dir = "releases"
  release_dir  = "#{releases_dir}/#{args[:version]}"
  latest_dir   = "#{releases_dir}/latest"

  # Create directories
  FileUtils.rm_r(release_dir) if File.exists?(release_dir)
  FileUtils.mkdir_p(release_dir)

  # Create files
  FileUtils.cp("README.md", "#{release_dir}/README.md")
  FileUtils.cp("CHANGELOG.rdoc", "#{release_dir}/CHANGELOG.rdoc")
  FileUtils.cp_r("demo", "#{release_dir}/")
  FileUtils.cp_r("test", "#{release_dir}/")
  File.open("#{release_dir}/bytes.js", "w").puts(javascript)
  File.open("VERSION", "w").puts(args[:version])

  # Correct demo/index.html
  javascript = File.open("#{release_dir}/demo/index.html")
                   .read
                   .gsub("src/bytes.js", "bytes.js")
                   .gsub("bytes.js</h1>", "bytes.js<small> v#{args[:version]}</small></h1>")
  File.open("#{release_dir}/demo/index.html", "w").puts(javascript)

  # Correct test/index.html
  javascript = File.open("#{release_dir}/test/index.html")
                   .read
                   .gsub("src/bytes.js", "bytes.js")
                   .gsub("bytes.js</h1>", "bytes.js<small> v#{args[:version]}</small></h1>")
  File.open("#{release_dir}/test/index.html", "w").puts(javascript)

  # Compress release using YUI compressor
  `java -jar lib/yuicompressor-2.4.2.jar -v #{release_dir}/bytes.js -o #{release_dir}/bytes.min.js`

end

desc "Minify and gzip src/bytes.js"
task :compress do |task, args|
  `java -jar lib/yuicompressor-2.4.2.jar -v src/bytes.js -o src/bytes.min.js`
  `gzip -9cf src/bytes.min.js > src/bytes.min.js.gz`
end